@extends('master.master')
@section('content')

    <!-- Header Start -->
    <div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown">HALAMAN TEST</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                       
                    </nav>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img  src="img/cek.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->


    <!-- FAQs Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                    <h1 class="display-6">Test Stroke Anda</h1>
                    <p class="text-primary fs-5 mb-0">Cek potensi stroke anda dengan parameter yang sudah ditentukan</p>
                </div>
                <!-- <div class="col-lg-6 text-lg-end">
                    <a class="btn btn-primary py-3 px-4" href="">Say Hello</a>
                </div> -->
            </div>
            <div class="row g-5">
               
                <div class="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <p class="mb-4">Parameter dibawah merupakan hal yang dapat mementukan gejala stroke pada diri Anda. Mohon isikan dengan benar menurut riwayat Anda</a>.</p>
                    <form>
                        <div class="row g-3">

                            <!-- JENIS KELAMIN -->
                            <div class="col-12">
                                <label for="" class="text-primary fs-5 mb-0">jenis kelamin</label>
                                <div class="form-floating" id="question1">
                                    <output id="cek1" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input1('laki-laki')" class="btn btn-primary">Laki-laki</button>
                                <button type="button" onclick="input1('perempuan')" class="btn btn-primary">perempuan</button>
                            </div>

                            <!-- UMUR -->
                            <div class="col-sm-12">
                                <label for="" class="text-primary fs-5 mb-0">Umur</label>
                                <div class="form-floating" id="question2">
                                    <output id="cek2" type="text" class="form-control" id="subject" placeholder="Subject">Isikan sesuai umur Anda</output>
                                    <label for="email">Jawab</label>
                                </div>
                                <input type="text" class="form-control" id="inputan" >
                                <button type="button" id="inputumur" onclick="kategoriUmur(umur.value)" class="btn btn-primary">Submit</button>
                            </div>
                            
                            <!-- HIPERTENSI -->
                            <div class="col-12">
                                <label for="" class="text-primary fs-5 mb-0">Riwayat Hipertensi</label>
                                <div class="form-floating" id="question3">
                                    <output id="cek3" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input3('Ya')" class="btn btn-primary">Ya</button>
                                <button type="button" onclick="input3('Tidak')" class="btn btn-primary">Tidak</button>
                            </div>

                            <!-- JANTUNG -->
                            <div class="col-sm-12">
                                <label for="" class="text-primary fs-5 mb-0">Riwayat Penaykit Jantung</label>
                                <div class="form-floating" id="question4">
                                    <output id="cek4" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input4('Ya')" class="btn btn-primary">Ya</button>
                                <button type="button" onclick="input4('Tidak')" class="btn btn-primary">Tidak</button>
                            </div>

                            <!-- PEKERJAAN -->
                            <div class="col-12">
                                <label for="" class="text-primary fs-5 mb-0">Pekerjaan</label>
                                <div class="form-floating" id="question5">
                                    <output id="cek5" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input5('ASN')" class="btn btn-primary">ASN</button>
                                <button type="button" onclick="input5('self-employed')" class="btn btn-primary">Self employed</button>
                                <button type="button" onclick="input5('wiraswasta')" class="btn btn-primary">Wiraswasta</button>
                                <button type="button" onclick="input5('tidak bekerja')" class="btn btn-primary">Tidak bekerja</button>
                                <button type="button" onclick="input5('belum bekerja')" class="btn btn-primary">Belum bekerja</button>
                            </div>

                            <!-- TEMPAT TINGGAL -->
                            <div class="col-sm-12">
                                <label for="" class="text-primary fs-5 mb-0">Tempat Tinggal</label>
                                <div class="form-floating" id="question6">
                                    <output id="cek6" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input6('perkotaan')" class="btn btn-primary">Perkotaan</button>
                                <button type="button" onclick="input6('pedesaan')" class="btn btn-primary">Pedesaan</button>
                            </div>

                            <!-- DIABETES -->
                            <div class="col-12">
                                <label for="" class="text-primary fs-5 mb-0">Riwayat Diabetes</label>
                                <div class="form-floating" id="question7">
                                    <output id="cek7" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input7('Ya')" class="btn btn-primary">Ya</button>
                                <button type="button" onclick="input7('Tidak')" class="btn btn-primary">Tidak</button>
                            </div>

                            <!-- OBESITAS -->
                            <div class="col-sm-12">
                                <label for="" class="text-primary fs-5 mb-0">Obesitas</label>
                                <div class="form-floating" id="question8">
                                    <output id="cek8" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                    <input type="text" class="form-control" id="inputan2" placeholder="Berat badan (kg)">
                                    <input type="text" class="form-control" id="inputan3" placeholder="Tinggi badan (cm)">
                                    <button id="inputumur" type="button" onclick="BMI()" class="btn btn-primary">Submit</button>
                            </div>

                            <!-- ROKOK -->
                            <div class="col-12">
                                <label for="" class="text-primary fs-5 mb-0">Riwayat Merokok</label>
                                <div class="form-floating" id="question9">
                                    <output id="cek9" type="text" class="form-control" id="subject" placeholder="Subject">Silahkan pilih</output>
                                    <label for="subject">Jawab</label>
                                </div>
                                <button type="button" onclick="input9('merokok')" class="btn btn-primary">Merokok</button>
                                <button type="button" onclick="input9('pernah merokok')" class="btn btn-primary">Pernah merokok</button>
                                <button type="button" onclick="input9('tidak merokok')" class="btn btn-primary">Tidak merokok</button>
                            </div>
                           
                            <div class="col-12">
                                <button type="button" id="eval" onclick="predictBest()" class="btn btn-success py-3 px-4">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    @endsection
    <!-- FAQs Start -->


   