import $ from 'jquery';
export default function sendform(form) {
    if (!form) return;
    let path = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=00D6F000002Y0a8&debug=1';
    let formdata = $(form).serializeArray();
    let data = {};

    formdata.forEach(function (val, index) {
        if (val.name && val.value && val.name.length > 0 && val.value.length > 0 && val.name !== "retURL") data[val.name] = val.value;
    });

    // data = {};
    data.oid = "00D6F000002Y0a8";
    data.debug = "1";
    // TODO remove validation from salesforce form settings
    let randomid = '';
    // let randomid = "user" + Math.floor(Math.random() * 1000000) + " : ";
    ['email', 'mobile'].forEach(function (val, index) {
        data[val] = randomid + data[val];
    });

    data['00N6F00000XtAFf'] = data['00N6F00000XtAFf'].split(',');

    data.submit = "submit";

    console.log(data);

    $.ajax({
        method: "GET",
        url: path,
        traditional: true,
        data: data
    }).done(function (msg) {
        console.log(msg);
    });

    // fetch(path, {
    //     method: 'post',
    //     mode: 'no-cors',
    //     body: JSON.stringify(data)
    // }).then(function (data) {
    //     console.log('Data:', data);
    // });

}