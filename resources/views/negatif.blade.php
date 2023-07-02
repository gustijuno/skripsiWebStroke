@extends('master.master')
@section('content')



    <!-- 404 Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <!-- <i class="bi bi-exclamation-triangle display-1 text-primary"></i> -->
                        <div class="col-lg-20 animated fadeIn">
                        <img class="img-fluid animated pulse infinite" style="animation-duration: 3s;" src="img/Negatif.png"
                        alt="">
                        </div>
                    <!-- <h1 class="display-1">Anda terindikasi memiliki risiko stroke !</h1> -->
                    <h1 class="mb-4">Anda tidak memiliki risiko stroke !</h1>
                    <p class="mb-4">Tetap jaga pola hidup sehat !</p>
                    <a class="btn btn-primary py-3 px-4" href="/test">Kembali ke Tes</a>
                    <a class="btn btn-primary py-3 px-4" href="/">Kembali ke beranda</a>
                </div>
            </div>
        </div>
    </div>
    <!-- 404 End -->

    @endsection