if(localStorage.getItem('atm_city_dropdown')==""){
    localStorage.setItem('atm_city_dropdown', 'null');
}
if(localStorage.getItem('atm_id_dropdown')==""){
    localStorage.setItem('atm_id_dropdown', 'null');
}
if(localStorage.getItem('atm_name_dropdown')==""){
    localStorage.setItem('atm_name_dropdown', 'null');
}
if(localStorage.getItem('atm_manager_name')==""){
    localStorage.setItem('atm_manager_name', 'null');
}
if(localStorage.getItem('atm_contact')==""){
    localStorage.setItem('atm_contact', 'null');
}
if(localStorage.getItem('atm_email')==""){
    localStorage.setItem('atm_email', 'null');
}
if(localStorage.getItem('atm_person_name')==""){
    localStorage.setItem('atm_person_name', 'null');
}
if(localStorage.getItem('atm_person_contact')==""){
    localStorage.setItem('atm_person_contact', 'null');
}

$('#atm-date').text(localStorage.getItem('datentime1'))
$('#city-name').text(localStorage.getItem('atm_city_dropdown'))
$('#atm-id').text(localStorage.getItem('atm_id_dropdown'))
$('#atm-add').text(localStorage.getItem('atm_name_dropdown'))
$('#atmo-name').text(localStorage.getItem('atm_manager_name'))
$('#atmo-number').text(localStorage.getItem('atm_contact'))
$('#email-id').text(localStorage.getItem('atm_email'))
$('#atm-person-name').text(localStorage.getItem('atm_person_name'))
$('#atm-person-contact').text(localStorage.getItem('atm_person_contact'))


$('#ac1-type').text(localStorage.getItem('tac1'))
$('#ac2-type').text(localStorage.getItem('tac2'))
$('#ac1-model').text(localStorage.getItem('mac1'))
$('#ac2-model').text(localStorage.getItem('mac2'))
$('#ac1-capacity').text(localStorage.getItem('cac1'))
$('#ac2-capacity').text(localStorage.getItem('cac2'))
$('#ac1-comm').text(localStorage.getItem('coac1'))
$('#ac2-comm').text(localStorage.getItem('coac2'))
$('#ac1-status').text(localStorage.getItem('dac1'))
$('#ac2-status').text(localStorage.getItem('dac2'))

$('#ups-model').text(localStorage.getItem('mups'))
$('#ups-capacity').text(localStorage.getItem('caups'))
$('#ups-batteries').text(localStorage.getItem('bups'))
$('#ups-avr').text(localStorage.getItem('avrups'))
$('#ups-transformer').text(localStorage.getItem('transups'))
$('#ups-servo').text(localStorage.getItem('servosups'))
$('#ups-vol').text(localStorage.getItem('volsups'))

$('#electric-sld').text(localStorage.getItem('sldelecsys'))
$('#electric-panels').text(localStorage.getItem('panelselecsys'))

$('#light-type').text(localStorage.getItem('tlobby'))
$('#light-no').text(localStorage.getItem('nlobby'))

$('#signage-status').text(localStorage.getItem('dsignage'))
$('#signage-timing').text(localStorage.getItem('timesignage'))

$('#dvr-model').text(localStorage.getItem('mdvr'))
$('#dvr-camera').text(localStorage.getItem('cameradvr'))
$('#dvr-hdd').text(localStorage.getItem('hdddvr'))

$('#atm-door').text(localStorage.getItem('ddoor'))
$('#door-stopper').text(localStorage.getItem('ddoorstopper'))

$('#atm-count').text(localStorage.getItem('atmcount'))
$('#site-image').text(localStorage.getItem('siteimage'))

$('#eb-reading').text(localStorage.getItem('metereb'))
$('#eb-type').text(localStorage.getItem('typeeb'))

$('#signage-timer').text(localStorage.getItem('stimertype'))
$('#ac-timer').text(localStorage.getItem('actimertype'))

$('#atm-note').text(localStorage.getItem('atm_note'))
var html = '<img src="' + localStorage.getItem('signimage') + '"' + 'alt="" class="img-fluid">'

document.getElementById('sign-image').innerHTML = html
$('.btn-createpdf').css('display', 'block')

function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        localStorage.setItem('signimage', reader.result)    
    }
    reader.readAsDataURL(file);
}


function encodeImageFileAsURL2(element) {
    var fileArray = [];
    for(var i = 0; i < element.files.length; i++){
        var file = element.files[i];
        var reader = new FileReader();
        reader.onloadend = function (){
            string = this.result
            console.log(string)
            // fileArray.push(toString(this.result))
        }
        reader.readAsDataURL(file)
    }    
    // console.log(fileArray)
}

function createPDF(){
        $('.btn-createpdf').css('display', 'none')

        var element = document.getElementById('pf1');
        var opt = {
            margin:       0,
            filename:     localStorage.getItem('atm_id_dropdown') + ' ' + localStorage.getItem('atm_city_dropdown') + ' ' + localStorage.getItem('datentime1'),
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  {scale:5},
            jsPDF:        { unit: 'mm', format:[170,330], orientation: 'portrait' },
            };

        html2pdf(element, opt).save()

        setTimeout(() => {
            // window.location = 'index.html'
        }, 3000);
}

function storedata(){
    if ($('#atm_sign_file')[0].files.length === 0) {
        alert("Please add Signature");
        return false;
    } else {
        localStorage.setItem('datentime1', $("#datetime").val())
        localStorage.setItem('atm_city_dropdown', $('#atm_city_dropdown').val());
        localStorage.setItem('atm_id_dropdown', $('#atm_id_dropdown').val());
        localStorage.setItem('atm_name_dropdown', $('#atm_name_dropdown').val());
        localStorage.setItem('atm_manager_name', $('#atm_manager_name').val());
        localStorage.setItem('atm_contact', $('#atm_contact').val());
        localStorage.setItem('atm_email', $('#atm_email').val());
        localStorage.setItem('atm_person_name', $('#atm_person_name').val());
        localStorage.setItem('atm_person_contact', $('#atm_person_contact').val());

        localStorage.setItem('tac1', $('#tac1').val());
        localStorage.setItem('tac2', $('#tac2').val());
        localStorage.setItem('mac1', $('#mac1').val());
        localStorage.setItem('mac2', $('#mac2').val());
        localStorage.setItem('cac1', $('#cac1').val());
        localStorage.setItem('cac2', $('#cac2').val());
        localStorage.setItem('coac1', $('#coac1').val());
        localStorage.setItem('coac2', $('#coac2').val());
        localStorage.setItem('dac1', $('#dac1').val());
        localStorage.setItem('dac2', $('#dac2').val());
        localStorage.setItem('mups', $('#mups').val());
        localStorage.setItem('caups', $('#caups').val());
        localStorage.setItem('bups', $('#bups').val());
        localStorage.setItem('avrups', $('#avrups').val());
        localStorage.setItem('transups', $('#transups').val());
        localStorage.setItem('servosups', $('#servosups').val());
        localStorage.setItem('volsups', $('#volsups').val());
        localStorage.setItem('sldelecsys', $('#sldelecsys').val());
        localStorage.setItem('panelselecsys', $('#panelselecsys').val());
        localStorage.setItem('tlobby', $('#tlobby').val());
        localStorage.setItem('nlobby', $('#nlobby').val());
        localStorage.setItem('dsignage', $('#dsignage').val());
        localStorage.setItem('timesignage', $('#timesignage').val());
        localStorage.setItem('mdvr', $('#mdvr').val());
        localStorage.setItem('cameradvr', $('#cameradvr').val());
        localStorage.setItem('hdddvr', $('#hdddvr').val());
        localStorage.setItem('ddoor', $('#ddoor').val());
        localStorage.setItem('ddoorstopper', $('#ddoorstopper').val());
        localStorage.setItem('atmcount', $('#atmcount').val());
        localStorage.setItem('siteimage', $('#siteimage').val());
        localStorage.setItem('metereb', $('#metereb').val());
        localStorage.setItem('typeeb', $('#typeeb').val());
        localStorage.setItem('stimertype', $('#stimertype').val());
        localStorage.setItem('actimertype', $('#actimertype').val());
        localStorage.setItem('atm_note', $("#atm_note").val())
        
        window.location = 'atmchecklist.html'
    }
}

function reset(){
    location.reload()
}