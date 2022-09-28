var $ = mdui.$;
var inst = new mdui.Dialog('#dialog');
$('#open').on('click', function () {
	  inst.open();
});
$('#dialog').on('open.mdui.dialog', function () {
	  console.log('open');
});

$('#dialog').on('opened.mdui.dialog', function () {
	  console.log('opened');
});

$('#dialog').on('close.mdui.dialog', function () {
	  console.log('close');
});

$('#dialog').on('closed.mdui.dialog', function () {
	  console.log('closed');
});

$('#dialog').on('cancel.mdui.dialog', function () {
	  console.log('cancel');
});

$('#dialog').on('confirm.mdui.dialog', function () {
	  console.log('confirm');
});
