import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m({}), {});
	t.deepEqual(m({foo: []}), {});
	t.deepEqual(m({foo: ['a', 'b']}), {
		'foo.0': 'a',
		'foo.1': 'b'
	});
	t.deepEqual(m({foo: {bar: ['a', 'b']}}), {
		'foo.bar.0': 'a',
		'foo.bar.1': 'b'
	});
	t.deepEqual(m({foo: {bar: ['a', {foo: ['b']}]}}), {
		'foo.bar.0': 'a',
		'foo.bar.1.foo.0': 'b'
	});
});
