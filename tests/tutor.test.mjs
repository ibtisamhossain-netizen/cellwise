import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const context = vm.createContext({ location: { hash: '#home' } });
const data = script.slice(script.indexOf('const G='), script.indexOf('const UNITS='));
const plain = script.slice(script.indexOf('function plain('), script.indexOf('function shuffle('));
const retrieval = script.slice(script.indexOf('function lessonMatches('), script.indexOf('function cleanStudent('));
vm.runInContext(data + plain + '\nlet Q=null;\n' + retrieval, context);
const run = code => vm.runInContext(code, context);

test('entire application script parses', () => { new vm.Script(script); });
test('home-page questions retrieve actual lesson facts', () => {
  assert.equal(run('lessonMatches("What is osmosis?",null)[0].c.id'), 'c3');
  assert.match(run('lessonContext(null,"What is osmosis?")'), /water/i);
  assert.equal(run('lessonMatches("What is osmosis? Explain it in simple English.",null)[0].s.h'), 'Osmosis: water moves');
  assert.ok(run('!lessonContext(null,"What is osmosis? Explain it in simple English.").includes("Simple diffusion")'));
  assert.ok(run('lessonMatches("How does the heart pump blood?",null).slice(0,3).some(e=>e.c.id==="c18")'));
});
test('lookup labels itself honestly and has no-match behavior', () => {
  assert.match(run('lessonLookup("osmosis",null)'), /Lesson lookup \(not AI\)/);
  assert.match(run('lessonLookup("cryptocurrency trading",null)'), /could not find/);
  assert.match(run('lessonLookup("",CHAPTERS[0])'), /Chapter 1:/);
});
test('context stays bounded and strips glossary markup', () => {
  assert.ok(run('CHAPTERS.every(c=>lessonContext(c).length<=6500)'));
  assert.ok(run('!lessonContext(CHAPTERS[0]).includes("[[")'));
});
test('active quiz lookup does not reveal the answer', () => {
  run('Q={cur:{q:[null,null,null,"test"]},answered:false};location.hash="#quiz-c1"');
  assert.match(run('lessonLookup("What is a cell?",CHAPTERS[0])'), /Try an answer first/);
  run('Q=null;location.hash="#home"');
});
test('all 23 chapters have valid practice fallback questions', () => {
  assert.equal(run('CHAPTERS.length'), 23);
  assert.ok(run('CHAPTERS.every(c=>c.quiz.some(q=>q[2]==="mc"&&q[4].length===4&&Number.isInteger(q[5])&&q[5]>=0&&q[5]<4&&q[6]))'));
});
