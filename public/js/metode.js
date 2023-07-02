var screen=document.querySelector('#screen');
var umur=document.querySelector('#inputan');
var bb=document.querySelector('#inputan2');
var tb=document.querySelector('#inputan3');

var dicek1=document.querySelector('#cek1');
var dicek2=document.querySelector('#cek2');
var dicek3=document.querySelector('#cek3');
var dicek4=document.querySelector('#cek4');
var dicek5=document.querySelector('#cek5');
var dicek6=document.querySelector('#cek6');
var dicek7=document.querySelector('#cek7');
var dicek8=document.querySelector('#cek8');
var dicek9=document.querySelector('#cek9');
// var dicek9=document.querySelector('#cek10');

var btn=document.querySelectorAll('.btn');
var rule1 = 0
var rule2 = 0

item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
});

//BMI
function BMI()
{
    document.getElementById('question8').style.backgroundColor = '#c2d40080'
    tinggi = tb.value/100
    bmi_value = bb.value/(tinggi*tinggi)
    if(bmi_value<=18.4)
    {
        rule8 = 'kurus'
        dicek8.value = bmi_value.toFixed(2) + ' - ' + rule8
    } else
    {
        if(bmi_value<=25)
        {
            rule8 = 'normal'
            dicek8.value = bmi_value.toFixed(2) + ' - ' + rule8
        } else
        {
            if(bmi_value>25)
            {
                rule8 = 'obesitas'
                dicek8.value = bmi_value.toFixed(2) + ' - ' + rule8
            } else
            {
                rule8 = 'error'
                dicek8.value = rule8
            }
        }
    }
}

//KATEGORI UMUR
function kategoriUmur(a)
{
    document.getElementById('question2').style.backgroundColor = '#c2d40080'
    if (a <= 1)
    {
        rule2 = 'bayi'
        dicek2.value = rule2
    } else
    {
        if (a<6)
        {
            rule2 = 'balita'
            dicek2.value = rule2
        } else
        {
            if (a <= 10)
            {
                rule2 = 'anak-anak'
                dicek2.value = rule2
            } else
            {
                if (a<=19)
                {
                    rule2 = 'remaja'
                    dicek2.value = rule2
                } else
                {
                    if (a<=44)
                    {
                    rule2 = 'dewasa'
                    dicek2.value = rule2
                    } else
                    {
                        if (a<=59)
                        {
                            rule2 = 'pra lanjut usia'
                            dicek2.value = rule2
                        } else
                        {
                            if (a>59)
                            {
                                rule2 = 'lanjut usia'
                                dicek2.value = rule2
                            } else
                            {
                                rule2 = 'error'
                                dicek2.value = rule2
                            }
                        }
                    }
                }
        
            }
        }
    }  
}

//JENIS KELAMIN
function input1(param)
{
    document.getElementById('question1').style.backgroundColor = '#c2d40080'
    if (param=='laki-laki') 
    {
       rule1='laki-laki'
       dicek1.value=rule1
    }  else 
        {
            if (param=='perempuan')
            {
                rule1='perempuan'
                dicek1.value=rule1
            } else
            {
                rule1='error'
                dicek1.value=rule1
            }        
        }
}

//KATEGORI UMUR
function input2(param)
{
    document.getElementById('question2').style.backgroundColor = '#c2d40080'
    if (param=='anak-anak') 
    {
       rule2='anak-anak'
       dicek2.value=rule2
    }  else 
    {
        if(param=='remaja')
        {
            rule2='remaja'
            dicek2.value=rule2
        } else
        {
            if(param=='dewasa')
            {
                rule2='dewasa'
                dicek2.value=rule2
            } else
            {
                if(param=='pra lanjut usia')
                {
                    rule2='pra lanjut usia'
                    dicek2.value=rule2
                } else
                {
                    if(param=='lanjut usia')
                    {
                        rule2='lanjut usia'
                        dicek2.value=rule2
                    } else
                    {
                        rule2='error'
                        dicek2.value=rule2
                    }                    
                }
            }
        } 

    }
}

//RIWAYAT HIPERTENSI
function input3(param)
{
    document.getElementById('question3').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule3=1
       dicek3.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule3=0
            dicek3.value='Tidak'
        }   else
        {
            rule3='error'
            dicek3.value='error'
        }           
    }
}

// RIWAYAT PENYAKIT JANTUNG
function input4(param)
{
    document.getElementById('question4').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule4=1
       dicek4.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule4=0
            dicek4.value='Tidak'
        }   else
        {
            rule4='error'
            dicek4.value='error'
        }           
    }
}

// TIPE PEKERJAAN
function input5(param)
{
    document.getElementById('question5').style.backgroundColor = '#c2d40080'
    if (param=='ASN') 
    {
       rule5='ASN'
       dicek5.value=rule5
    }  else 
    {
        if(param=='self-employed')
        {
            rule5='self-employed'
            dicek5.value=rule5
        } else
        {
            if(param=='wiraswasta')
            {
                rule5='wiraswasta'
                dicek5.value=rule5
            } else
            {
                if(param=='belum bekerja')
                {
                    rule5='belum bekerja'
                    dicek5.value=rule5
                } else
                {
                    if(param=='tidak bekerja')
                    {
                        rule5='tidak bekerja'
                        dicek5.value=rule5
                    } else
                    {
                        rule5='error'
                        dicek5.value=rule5
                    }
                }
            }
        } 

    }
}

// TEMPAT TINGGAL
function input6(param)
{
    document.getElementById('question6').style.backgroundColor = '#c2d40080'
    if (param=='perkotaan') 
    {
       rule6='perkotaan'
       dicek6.value=rule6
    }  else 
    {
        if (param=='pedesaan')
        {
            rule6='pedesaan'
            dicek6.value=rule6
        } else
        {
            rule6='error'
            dicek6.value=rule6
        }        
    }
}

// RIWAYAT DIABETES
function input7(param)
{
    document.getElementById('question7').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule7=1
       dicek7.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule7=0
            dicek7.value='Tidak'
        }   else
        {
            rule7='error'
            dicek7.value='error'
        }           
    }
}

// KATEGORI OBESITAS
function input8(param)
{
    if (param=='kurus') 
    {
       rule8='kurus'
       dicek8.value=rule8
    }  else 
    {
        if(param=='normal')
        {
            rule8='normal'
            dicek8.value=rule8
        } else
        {
            if(param=='obesitas')
            {
                rule8='obesitas'
                dicek8.value=rule8
            } else
            {
                rule8='error'
                dicek8.value=rule8
            }            
        }
    }
}

//STATATUS MEROKOK
function input9(param)
{
    document.getElementById('question9').style.backgroundColor = '#c2d40080'
    if (param=='tidak merokok') 
    {
       rule9='tidak merokok'
       dicek9.value=rule9
    }  else 
    {
        if(param=='pernah merokok')
        {
            rule9='pernah merokok'
            dicek9.value=rule9
        } else
        {
            if(param=='merokok')
            {
                rule9='merokok'
                dicek9.value=rule9
            } else
            {
                rule9='error'
                dicek9.value=rule9
            }            
        }
    }
}

/**
 * RULE 1: JENIS KELAMIN
 * RULE 2: KATEOGIR UMUR
 * RULE 3: RIWAYAT HIPERTENSI
 * RULE 4: RIWAYAT PENYAKIT JANTUNG
 * RULE 5: TIPE PEKERJAAN
 * RULE 6: TEMPAT TINGGAL
 * RULE 7: RIWAYAT DIABETES
 * RULE 8: KATEGORI OBESITAS
 * RULE 9: STATUS MEROKOK 
 */

function predictBest(){
    if(rule2=='bayi'||rule2=='balita'||rule2=='anak-anak'||rule2=='remaja'){
        location.href='/hasilNegatif'
    }else{
        if(rule2=='dewasa'){
            if(rule3==1){
                if(rule9=='tidak merokok'|| rule9=='pernah merokok'){
                    location.href='/hasilNegatif'
                }else{
                    if(rule9=='merokok'){
                        if(rule6=='perkotaan'){
                            location.href='/hasilNegatif'
                        }else{
                            if(rule6=='pedesaan'){
                                location.href='/hasilPositif'
                            }
                        }
                    }
                }
            }else{
                if(rule3==0){ //START
                    if(rule5=='belum bekerja'|| rule5=='tidak bekerja'){
                        location.href='/hasilNegatif'
                    }else{
                        if(rule5=='self-employed'){ //START
                            if(rule6=='pedesaan'){
                                location.href='/hasilNegatif'
                            }else{
                                if(rule6=='perkotaan'){
                                    if(rule1=='laki-laki'){
                                        location.href='/hasilNegatif'
                                    }if(rule1=='perempuan'){
                                        if(rule9=='tidak merokok'){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule9=='pernah merokok'){
                                                if(rule8=='kurus'|| rule8=='obesitas'){
                                                    location.href='/hasilNegatif'
                                                }else{
                                                    if(rule8=='normal'){
                                                        location.href='/hasilPositif'
                                                    }
                                                }
                                            }else{
                                                if(rule9=='merokok'){
                                                    if(rule8=='kurus'|| rule8=='normal'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule8=='obesitas'){
                                                            if(rule7==1){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule7==0){
                                                                    location.href='/hasilPositif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            if(rule5=='wiraswasta'){
                                if(rule1=='laki-laki'){
                                    location.href='/hasilNegatif'
                                }else{
                                    if(rule1=='perempuan'){
                                        if(rule8=='kurus'|| rule8=='nomral'){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule8=='obesitas'){
                                                if(rule9=='tidak merokok'){
                                                    if(rule6=='perkotaan'){
                                                        location.href='/hasilPositif'
                                                    }else{
                                                        if(rule6=='pedesaan'){
                                                            location.href='/hasilNegatif'
                                                        }
                                                    }
                                                }else{
                                                    if(rule9=='pernah merokok'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule9=='merokok'){
                                                            if(rule6=='perkotaan'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    location.href='/hasilPositif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }else{
            if(rule2=='pra lanjut usia'){
                if(rule8=='kurus'){
                    location.href='/hasilNegatif'
                }else{
                    if(rule8=='normal'){
                        if (rule5=='belum bekerja'|| rule5=='tidak bekerja'|| rule5=='ASN'|| rule5=='self-employed'){
                            location.href='/hasilNegatif'
                        }else{
                            if(rule5=='wiraswasta'){
                                if(rule1=='laki-laki'){
                                    location.href='/hasilNegatif'
                                }else{
                                    if(rule1=='perempuan'){
                                        if(rule3==1){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule3==0){
                                                if(rule9=='tidak merokok'){
                                                    if(rule6=='perkotaan'){
                                                        location.href='/hasilPositif'
                                                    }else{
                                                        if(rule6=='pedesaan'){
                                                            location.href='/hasilNegatif'
                                                        }
                                                    }
                                                }else{
                                                    if(rule9=='pernah merokok'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule9=='merokok'){
                                                            if(rule6=='perkotaan'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    location.href='/hasilPositif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(rule8=='obesitas'){
                            if(rule3==1){
                                if(rule1=='laki-laki'){
                                    if(rule4==1){
                                        location.href='/hasilNegatif'
                                    }else{
                                        if(rule4==0){
                                            if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                location.href='/hasilNegatif'
                                            }else{
                                                if(rule5=='ASN'){
                                                    if(rule6=='perkotaan'){
                                                        if(rule7==1){
                                                            location.href='/hasilNegatif'
                                                        }else{
                                                            if(rule7==0){
                                                                location.href='/hasilPositif'
                                                            }
                                                        }
                                                    }else{
                                                        if(rule6=='pedesaan'){
                                                            location.href='/hasilNegatif'
                                                        }
                                                    }
                                                }else{
                                                    if(rule5=='self-employed'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule5=='wiraswasta'){
                                                            if(rule7==1){
                                                                if(rule9=='tidak merokok'){
                                                                    if(rule6=='perkotaan'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule6=='pedesaan'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule9=='pernah merokok'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule9=='merokok'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }
                                                            }if(rule7==0){
                                                                if(rule9=='tidak merokok'){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule9=='pernah merokok'){
                                                                        if(rule6=='perkotaan'){
                                                                            location.href='/hasilPositif'
                                                                        }else{
                                                                            if(rule6=='pedesaan'){
                                                                                location.href='/hasilNegatif'
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule9=='merokok'){
                                                                            location.href='/hasilNegatif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    if(rule1=='perempuan'){
                                        if(rule4==1){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule4==0){
                                                if(rule9=='tidak merokok'){
                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule5=='ASN'){
                                                            if(rule6=='perkotaan'){
                                                                location.href='/hasilPositif'
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    location.href='/hasilNegatif'
                                                                }
                                                            }
                                                        }else{
                                                            if(rule5=='self-employed'){
                                                                location.href='/hasilPositif'
                                                            }else{
                                                                if(rule5=='wiraswasta'){
                                                                    if(rule6=='perkotaan'){
                                                                        if(rule7==1){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule7==0){
                                                                                location.href='/hasilPositif'
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule6=='pedesaan'){
                                                                            location.href='/hasilNegatif'

                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule9=='pernah merokok'){
                                                        if(rule6=='perkotaan'){
                                                            location.href='/hasilNegatif'
                                                        }else{
                                                            if(rule6=='pedesaan'){
                                                                location.href='/hasilPositif'
                                                            }
                                                        }
                                                    }else{
                                                        if(rule9=='merokok'){
                                                            location.href='/hasilNegatif'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                if(rule3==0){
                                    if(rule9=='tidak merokok'){
                                        if(rule4==1){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule4==0){
                                                if(rule1=='laki-laki'){
                                                    if(rule7==1){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule7==0){
                                                            if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule5=='ASN'){
                                                                    if(rule6=='perkotaan'){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule6=='pedesaan'){
                                                                            location.href='/hasilNegatif'
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule5=='self-employed'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule5=='wiraswasta'){
                                                                            if(rule6=='perkotaan'){
                                                                                location.href='/hasilPositif'
                                                                            }else{
                                                                                if(rule6=='pedesaan'){
                                                                                    location.href='/hasilNegatif'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule1=='perempuan'){
                                                        if(rule6=='perkotaan'){
                                                            if(rule7==1){
                                                                location.href='/hasilNegatif'
                                                            }if(rule7==0){
                                                                if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN' || rule5=='wiraswasta'){
                                                                    location.href='/hasilNegatif'
                                                                }if(rule5=='self-employed'){
                                                                    location.href='/hasilPositif'
                                                                }
                                                            }
                                                        }else{
                                                            if(rule6=='perkotaan'){
                                                                if(rule7==1){
                                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN' || rule5=='self-employed' || rule5=='ASN'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule5=='wiraswasta'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN' || rule5=='wiraswasta' || rule5=='ASN'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule5=='self-employed'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                }
                                            }
                                        }
                                    }else{
                                        if(rule9=='pernah merokok'){
                                            if(rule4==1){
                                                location.href='/hasilNegatif'
                                            }else{
                                                if(rule4==0){
                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule5=='ASN'){
                                                            if(rule6=='perkotaan'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    if(rule1=='laki-laki'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule1=='perempuan'){
                                                                            if(rule7==1){
                                                                                location.href='/hasilNegatif'
                                                                            }else{
                                                                                if(rule7==0){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule5=='self-employed'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule5=='wiraswasta'){
                                                                    if(rule7==1){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilPositif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                location.href='/hasilNegatif'
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule7==0){
                                                                            if(rule6=='perkotaan'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilPositif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                if(rule6=='pedesaan'){
                                                                                    if(rule1=='laki-laki'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }else{
                                                                                        if(rule1=='perempuan'){
                                                                                            location.href='/hasilPositif'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            if(rule9=='merokok'){
                                                if(rule6=='perkotaan'){
                                                    if(rule1=='laki-laki'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule1=='perempuan'){
                                                            if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN' || rule5=='self-employed'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule5=='wiraswasta'){
                                                                    if(rule7==1){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule7==0){
                                                                            location.href='/hasilNegatif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule6=='pedesaan'){
                                                        if(rule1=='laki-laki'){
                                                            if(rule4==1){
                                                                if(rule7==1){
                                                                    location.href='/hasilPositif'
                                                                }else{
                                                                    if(rule7==0){
                                                                        location.href='/hasilNegatif'
                                                                    }
                                                                }
                                                            }else{
                                                                if(rule4==0){
                                                                    if(rule7==1){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule7==0){
                                                                            if(rule5=='belum bekerja' || rule5=='tidadk bekerja'){
                                                                                location.href='/hasilNegatif'
                                                                            }else{
                                                                                if(rule5=='ASN' || rule5=='self-employed' || rule5=='wiraswasta'){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule1=='perempuan'){
                                                                if(rule7==1){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule7==0){
                                                                        if(rule4==1){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule4==0){
                                                                                if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN' || rule5=='wiraswasta'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule5=='self-employed'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }else{
                if(rule2=='lanjut usia'){
                    if(rule4==1){
                        if(rule7==1){
                            if(rule8=='kurus' || rule8=='normal'){
                                location.href='/hasilNegatif'
                            }else{
                                if(rule8=='obesitas'){
                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                        location.href='/hasilNegatif'
                                    }else{
                                        if(rule5=='ASN'){
                                            location.href='/hasilPositif'
                                        }else{
                                            if(rule5=='wiraswasta'){
                                                if(rule9=='tidak merokok'){
                                                    if(rule3==1){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule3==0){
                                                            if(rule6=='perkotaan'){
                                                                location.href='/hasilPositif'
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    location.href='/hasilNegatif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule9=='pernah merokok'){
                                                        if(rule6=='perkotaan'){
                                                            location.href='/hasilPositif'
                                                        }else{
                                                            if(rule6=='pedesaan'){
                                                                location.href='/hasilNegatif'
                                                            }
                                                        }
                                                    }else{
                                                        if(rule9=='merokok'){
                                                            if(rule6=='perkotaan'){
                                                                if(rule3==1){
                                                                    location.href='/hasilPositif'
                                                                }else{
                                                                    if(rule3==0){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                location.href='/hasilPositif'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    location.href='/hasilPositif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            if(rule7==0){
                                if(rule8=='kurus'){
                                    location.href='/hasilNegatif'
                                }else{
                                    if(rule8=='normal'){
                                        if(rule3==1){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule3==0){
                                                if(rule6=='perkotaan'){
                                                    if(rule9=='tidak merokok' || rule9=='pernah merokok' ){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule9=='merokok'){
                                                            location.href='/hasilPositif'
                                                        }
                                                    }
                                                }else{
                                                    if(rule6=='pedesaan'){
                                                        if(rule9=='tidak merokok'){
                                                            location.href='/hasilPositif'
                                                        }else{
                                                            if(rule9=='pernah merokok'){
                                                                if(rule1=='laki-laki'){
                                                                    location.href='/hasilPositif'
                                                                }else{
                                                                    if(rule1=='perempuan'){
                                                                        location.href='/hasilNegatif'
                                                                    }
                                                                }
                                                            }else{
                                                                if(rule9=='merokok'){
                                                                    location.href='/hasilNegatif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }else{
                                        if(rule8=='obesitas'){
                                            if(rule9=='tidak merokok'){
                                                if(rule3==1){
                                                    location.href='/hasilPositif'
                                                }else{
                                                    if(rule3==0){
                                                        location.href='/hasilNegatif'
                                                    }
                                                }
                                            }else{
                                                if(rule0=='pernah merokok'){
                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule5=='self-employed'){
                                                            if(rule6=='perkotaan'){
                                                                if(rule3==1){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule3==0){
                                                                        location.href='/hasilPositif'
                                                                    }
                                                                }
                                                            }else{
                                                                if(rule6=='pedesaan'){
                                                                    location.href='/hasilNegatif'
                                                                }
                                                            }
                                                        }else{
                                                            if(rule5=='wiraswasta'){
                                                                if(rule6=='perkotaan'){
                                                                    location.href='/hasilPositif'
                                                                }else{
                                                                    if(rule6=='pedesaan'){
                                                                        if(rule3==1){
                                                                            if(rule1=='laki-laki'){
                                                                                location.href='/hasilNegatif'
                                                                            }else{
                                                                                if(rule1=='perempuan'){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule3==0){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule9=='merokok'){
                                                        if(rule1=='laki-laki'){
                                                            if(rule3==1){
                                                                location.href='/hasilPositif'
                                                            }else{
                                                                if(rule3==0){
                                                                    if(rule6=='perkotaan'){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule6=='pedesaan'){
                                                                            location.href='/hasilNegatif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule1=='perempuan'){
                                                                if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='self-employed' || rule5=='wiraswasta'){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule5=='ASN'){
                                                                        location.href='/hasilPositif'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        if(rule4==0){
                            if(rule3==1){
                                if(rule8=='kurus'){
                                    location.href='/hasilNegatif'
                                }else{
                                    if(rule8=='normal'){
                                        if(rule9=='tidak merokok'){
                                            if(rule7==1){
                                                location.href='/hasilPositif'
                                            }else{
                                                if(rule7==0){
                                                    if(rule6=='perkotaan'){
                                                        location.href='/hasilPositif'
                                                    }else{
                                                        if(rule6=='pedesaan'){
                                                            location.href='/hasilNegatif'
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            if(rule9=='pernah merokok'){
                                                if(rule1=='laki-laki'){
                                                    location.href='/hasilNegatif'
                                                }else{
                                                    if(rule1=='perempuan'){
                                                        if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='self-employed'){
                                                            location.href='/hasilNegatif'
                                                        }else{
                                                            if(rule5=='ASN'){
                                                                location.href='/hasilPositif'
                                                            }else{
                                                                if(rule5=='wiraswasta'){
                                                                    if(rule6=='perkotaan'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule6=='pedesaan'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }else{
                                                if(rule9=='merokok'){
                                                    location.href='/hasilPositif'
                                                }
                                            }
                                        }
                                    }else{
                                        if(rule8=='obesitas'){
                                            if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                location.href='/hasilNegatif'
                                            }else{
                                                if(rule=='ASN'){
                                                    if(rule6=='perkotaan'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule6=='pedesaan'){
                                                            if(rule9=='tidak merokok' || rule9=='merokok'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule9=='pernah merokok'){
                                                                    location.href='/hasilPositif'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule5=='self-employed'){
                                                        if(rule7==1){
                                                            if(rule1=='laki-laki'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule1=='perempuan'){
                                                                    if(rule6=='perkotaan'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule6=='pedesaan'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule7==0){
                                                                if(rule1=='laki-laki'){
                                                                    if(rule9=='tidak merokok'){
                                                                        if(rule6=='perkotaan'){
                                                                            location.href='/hasilPositif'
                                                                        }else{
                                                                            if(rule6=='pedesaan'){
                                                                                location.href='/hasilNegatif'
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule9=='pernah merokok'){
                                                                            if(rule6=='perkotaan'){
                                                                                location.href='/hasilNegatif'
                                                                            }else{
                                                                                if(rule6=='pedesaan'){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule9=='merokok'){
                                                                                location.href='/hasilPositif'
                                                                            }
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule1=='perempuan'){
                                                                        if(rule6=='perkotaan'){
                                                                            if(rule9=='tidak merokok'){
                                                                                location.href='/hasilPositif'
                                                                            }else{
                                                                                if(rule9=='pernah merokok'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule9=='merokok'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule6=='pedesaan'){
                                                                                if(rule9=='tidak merokok'){
                                                                                    location.href='/hasilPositif'
                                                                                }else{
                                                                                    if(rule9=='pernah merokok'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }else{
                                                                                        if(rule9=='merokok'){
                                                                                            location.href='/hasilPositif'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }else{
                                                        if(rule5=='wiraswasta'){
                                                            if(rule7==1){
                                                                if(rule6=='perkotaan'){
                                                                    if(rule9=='tidak merokok'){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule9=='pernah merokok'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule0=='merokok'){
                                                                                location.href='/hasilPositif'
                                                                            }
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule6=='pedesaan'){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilPositif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                location.href='/hasilNegatif'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }else{
                                                                if(rule7==0){
                                                                    if(rule9=='tidak merokok'){
                                                                        if(rule6=='perkotaan'){
                                                                            if(rule1=='laki-laki'){
                                                                                location.href='/hasilNegatif'
                                                                            }else{
                                                                                if(rule1=='perempuan'){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule6=='pedesaan'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule9=='pernah merokok'){
                                                                            if(rule1=='laki-laki'){
                                                                                location.href='/hasilNegatif'
                                                                            }else{
                                                                                if(rule1=='perempuan'){
                                                                                    if(rule6=='perkotaan'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }else{
                                                                                        if(rule6=='pedesaan'){
                                                                                            location.href='/hasilPositif'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule9=='merokok'){
                                                                                location.href='/hasilNegatif'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }else{
                                if(rule3==0){
                                    if(rule8=='kurus'){
                                        if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='ASN' || rule5=='wiraswasta'){
                                            location.href='/hasilNegatif'
                                        }else{
                                            if(rule5=='self-employed'){
                                                location.href='/hasilPositif'
                                            }
                                        }
                                    }else{
                                        if(rule8=='normal'){
                                            if(rule7==1){
                                                location.href='/hasilNegatif'
                                            }else{
                                                if(rule7==0){
                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                        location.href='/hasilNegatif'
                                                    }else{
                                                        if(rule5='ASN'){
                                                            if(rule9=='tidak merokok'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule9=='pernah merokok'){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule9=='merokok'){
                                                                        if(rule6=='perkotaan'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule6=='pedesaan'){
                                                                                location.href='/hasilPositif'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule5=='self-employed'){
                                                                if(rule9=='tidak merokok'){
                                                                    if(rule1=='laki-laki'){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule1=='perempuan'){
                                                                            if(rule6=='perkotaan'){
                                                                                location.href='/hasilPositif'
                                                                            }else{
                                                                                if(rule6=='pedesaan'){
                                                                                    location.href='/hasilNegatif'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule9=='pernah merokok'){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule9=='merokok'){
                                                                            location.href='/hasilNegatif'
                                                                        }
                                                                    }
                                                                }
                                                            }else{
                                                                if(rule5=='wiraswasta'){
                                                                    if(rule9=='tidak merokok'){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                if(rule6=='perkotaan'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule6=='pedesaan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule9=='pernah merokok'){
                                                                            if(rule6=='perkotaan'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                if(rule6=='pedesaan'){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule9=='merokok'){
                                                                                if(rule6=='perkotaan'){
                                                                                    if(rule1=='laki-laki'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }else{
                                                                                        if(rule1=='perempuan'){
                                                                                            location.href='/hasilPositif'
                                                                                        }
                                                                                    }
                                                                                }else{
                                                                                    if(rule6=='pedesaan'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }else{
                                            if(rule8=='obesitas'){
                                                if(rule6=='perkotaan'){
                                                    if(rule9=='tidak merokok'){
                                                        if(rule7==1){
                                                            if(rule1=='laki-laki'){
                                                                location.href='/hasilPositif'
                                                            }else{
                                                                if(rule1=='perempuan'){
                                                                    if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='wiraswasta'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule5=='ASN' || rule5=='self-employed'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule7==0){
                                                                if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule5=='ASN'){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                location.href='/hasilPositif'
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule5=='self-employed'){
                                                                            if(rule1=='laki-laki'){
                                                                                location.href='/hasilPositif'
                                                                            }else{
                                                                                if(rule1=='perempuan'){
                                                                                    location.href='/hasilNegatif'
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule5=='wiraswasta'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }else{
                                                        if(rule9=='pernah merokok'){
                                                            if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule5=='ASN'){
                                                                    if(rule7==1){
                                                                        location.href='/hasilPositif'
                                                                    }else{
                                                                        if(rule7==0){
                                                                            location.href='/hasilNegatif'
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule5=='self-employed'){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                if(rule7==1){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule7==0){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule5=='wiraswasta'){
                                                                            if(rule1=='laki-laki'){
                                                                                if(rule7==1){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule7==0){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                if(rule1=='perempuan'){
                                                                                    if(rule7==1){
                                                                                        location.href='/hasilPositif'
                                                                                    }else{
                                                                                        if(rule7==0){
                                                                                            location.href='/hasilNegatif'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule9=='merokok'){
                                                                if(rule7==1){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule7==0){
                                                                        if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule5=='ASN'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                if(rule5=='self-employed'){
                                                                                    if(rule1=='laki-laki'){
                                                                                        location.href='/hasilPositif'
                                                                                    }else{
                                                                                        if(rule1=='perempuan'){
                                                                                            location.href='/hasilNegatif'
                                                                                        }
                                                                                    }
                                                                                }else{
                                                                                    if(rule5=='wiraswasta'){
                                                                                        if(rule1=='laki-laki'){
                                                                                            location.href='/hasilNegatif'
                                                                                        }else{
                                                                                            if(rule1=='perempuan'){
                                                                                                location.href='/hasilPositif'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }else{
                                                    if(rule6=='pedesaan'){
                                                        if(rule7==1){
                                                            if(rule5=='belum bekerja' || rule5=='tidak bekerja' || rule5=='self-employed'){
                                                                location.href='/hasilNegatif'
                                                            }else{
                                                                if(rule5=='ASN'){
                                                                    if(rule1=='laki-laki'){
                                                                        location.href='/hasilNegatif'
                                                                    }else{
                                                                        if(rule1=='perempuan'){
                                                                            location.href='/hasilPositif'
                                                                        }
                                                                    }
                                                                }else{
                                                                    if(rule5=='wiraswasta'){
                                                                        if(rule9=='tidak merokok'){
                                                                            location.href='/hasilPositif'
                                                                        }else{
                                                                            if(rule9=='pernah merokok'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilNegatif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilPositif'
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                if(rule9=='merokok'){
                                                                                    location.href='/hasilPositif'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            if(rule7==0){
                                                                if(rule5=='belum bekerja' || rule5=='tidak bekerja'){
                                                                    location.href='/hasilNegatif'
                                                                }else{
                                                                    if(rule5=='ASN'){
                                                                        if(rule1=='laki-laki'){
                                                                            location.href='/hasilNegatif'
                                                                        }else{
                                                                            if(rule1=='perempuan'){
                                                                                if(rule0=='tidak merokok'){
                                                                                    location.href='/hasilPositif'
                                                                                }else{
                                                                                    if(rule9=='pernah merokok' || rule9=='merokok'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }else{
                                                                        if(rule5=='self-employed'){
                                                                            if(rule9=='tidak merokok'){
                                                                                if(rule1=='laki-laki'){
                                                                                    location.href='/hasilPositif'
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }
                                                                                }
                                                                            }else{
                                                                                if(rule9=='pernah merokok'){
                                                                                    if(rule1=='laki-laki'){
                                                                                        location.href='/hasilPositif'
                                                                                    }else{
                                                                                        if(rule1=='perempuan'){
                                                                                            location.href='/hasilNegatif'
                                                                                        }
                                                                                    }
                                                                                }else{
                                                                                    if(rule9=='merokok'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }else{
                                                                            if(rule5=='wiraswasta'){
                                                                                if(rule1=='laki-laki'){
                                                                                    if(rule9=='tidak merokok'){
                                                                                        location.href='/hasilNegatif'
                                                                                    }else{
                                                                                        if(rule9=='pernah merokok'){
                                                                                            location.href='/hasilPositif'
                                                                                        }else{
                                                                                            if(rule9=='merokok'){
                                                                                                location.href='/hasilNegatif'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }else{
                                                                                    if(rule1=='perempuan'){
                                                                                        if(rule9=='tidak merokok'){
                                                                                            location.href='/hasilPositif'
                                                                                        }else{
                                                                                            if(rule9=='pernah merokok'){
                                                                                                location.href='/hasilNegatif'
                                                                                            }else{
                                                                                                if(rule9=='merokok'){
                                                                                                    location.href='/hasilPositif'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
    