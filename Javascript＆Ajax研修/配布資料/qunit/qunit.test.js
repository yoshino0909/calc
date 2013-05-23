// 第1引数はテスト対象の名前、第2引数はテスト関数
test('qunit', function(){
	ok(true,  'ok関数は第1引数の評価値がtrueであれば成功');
	ok(false, 'ok関数は第1引数の評価値がfalseであれば失敗');

	equal(1,     1,     'equal関数は第1引数と第2引数が等しければ成功');
	equal("foo", "bar", 'equal関数は第1引数と第2引数が等しくなければ失敗');
});
