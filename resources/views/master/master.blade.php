<!DOCTYPE html >
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Stroke Test</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

      <!-- CSRF Token -->
      <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Favicon -->
    <link href="{{ asset('img/icon2.png') }}" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="{{ asset('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css') }}">

    <!-- Libraries Stylesheet -->
    <!-- <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="{{ asset('lib/animate/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('lib/owlcarousel/assets/owl.carousel.min.css') }}">

    <!-- Customized Bootstrap Stylesheet -->
    <!-- <link href="css/bootstrap.min.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">

    <!-- Template Stylesheet -->
    <!-- <link href="css/style.css" rel="stylesheet"> -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/rolecolor.css') }}"rel="stylesheet">
    <script src="{{ asset('js/metode.js') }}" defer></script>
    


    
</head>

<body>
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" role="status"></div>
    </div>
    <!-- Spinner End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <a href="/" class="navbar-brand d-flex align-items-center">
            <h2 class="m-0 text-primary"><img class="img-fluid me-2" src=" {{ asset('img/icon2.png') }}" alt=""
                    style="width: 45px;">Stroke Test</h2>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="{{ Request::is('/') ? 'active' : '' }}">
                    <a href="/" class="nav-item nav-link">Beranda</a>
                </li>
                <a href="/test" class="nav-item nav-link">Tes</a>
                <a href="/posts/1" class="nav-item nav-link">Forum</a>
                <a href="roadmap.html" class="nav-item nav-link">Tentang</a>
                <div class="nav-item dropdown">
                @if(Auth::user())
                    <a  class="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown">{{ Auth::user()->name }}</a>
                    <div class="dropdown-menu shadow-sm m-0">
                    <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"class="dropdown-item">{{ __('Logout') }}</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                    </form>
                @else
                <a class="btn btn-primary  mt-3 " href="/login">Login</a>
                @endif
                        <!-- <a href="token.html" class="dropdown-item">Token Sale</a>
                        <a href="faq.html" class="dropdown-item active">FAQs</a>
                        <a href="404.html" class="dropdown-item">404 Page</a> -->
                    </div>
                </div>
                <!-- <a href="contact.html" class="nav-item nav-link">Contact</a> -->
            </div>
            <!-- <div class="h-100 d-lg-inline-flex align-items-center d-none">
                <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                        class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square rounded-circle bg-light text-primary me-2" href=""><i
                        class="fab fa-twitter"></i></a>
                <a class="btn btn-square rounded-circle bg-light text-primary me-0" href=""><i
                        class="fab fa-linkedin-in"></i></a>
            </div> -->
        </div>
    </nav>
    <!-- Navbar End -->

    @yield('content')


     <!-- Footer Start -->
     <div class="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-md-6">
                    <h1 class="text-primary mb-4"><img class="img-fluid me-2" src="{{ asset('img/icon2.png') }}" alt=""
                            style="width: 45px;">Stroke Test</h1>
                    <span>Selamat datang di Web Deteksi Dini Risiko Stroke!. Web Deteksi Dini Risiko Stroke merupakan platform interaktif yang dirancang untuk membantu Anda mengidentifikasi dan memahami potensi risiko terhadap penyakit stroke. </span>
                </div>
                @if(Auth::user())
                @else
                <div class="col-md-6">
                    <h5 class="mb-4">Login</h5>
                    <p>Login untuk dapat mengakses fitur forum.</p>
                    <div class="position-relative">
                        <!-- <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email"> -->
                            <a class="btn btn-primary py-3 px-4 " href="/login">Register</a>
                    </div>
                </div>
                @endif
                <!-- <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Kontak</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i class="fa fa-envelope me-3"></i>info@example.com</p>
                </div> -->
                <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Halaman</h5>
                    <a class="btn btn-link" href="/">Beranda</a>
                    <a class="btn btn-link" href="/test">Tes</a>
                    <a class="btn btn-link" href="">Tentang</a>
                    <a class="btn btn-link" href="/posts/1">Forum</a>
                </div>
                <!-- <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Our Services</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                </div> -->
                <!-- <div class="col-lg-3 col-md-6">
                    <h5 class="mb-4">Follow Us</h5>
                    <div class="d-flex">
                        <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square rounded-circle me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">gustijuno</a>, All Right Reserved.
                    </div>
                    <!-- <div class="col-md-6 text-center text-md-end">
                       
                        Designed By <a href="https://htmlcodex.com">HTML Codex</a> Distributed By <a
                            href="https://themewagon.com">ThemeWagon</a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            class="bi bi-arrow-up"></i></a>


    <!-- JavaScript Libraries -->
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> -->
    <script src="{{ asset('https://code.jquery.com/jquery-3.4.1.min.js')}}"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script> -->
    <script src="{{ asset('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')}}"></script>
    <!-- <script src="lib/wow/wow.min.js"></script> -->
    <script src="{{ asset('lib/wow/wow.min.js')}}"></script>
    <!-- <script src="lib/easing/easing.min.js"></script> -->
    <script src="{{ asset('lib/easing/easing.min.js')}}"></script>
    <!-- <script src="lib/waypoints/waypoints.min.js"></script> -->
    <script src="{{ asset('lib/waypoints/waypoints.min.js')}}"></script>
    <!-- <script src="lib/owlcarousel/owl.carousel.min.js"></script> -->
    <script src="{{ asset('lib/owlcarousel/owl.carousel.min.js')}}"></script>
    <!-- <script src="lib/counterup/counterup.min.js"></script> -->
    <script src="{{ asset('lib/counterup/counterup.min.js')}}"></script>

    <!-- Template Javascript -->
    <!-- <script src="js/main.js"></script> -->
    <script src="{{ asset('js/main.js')}}"></script>

    
</body>

</html>