<head>
<link href="css/login.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" crossorigin="anonymous"></script>


</head>

<div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <!-- <div class="row">
                        <img src="https://i.imgur.com/CXQmsmF.png" class="logo">
                    </div> -->
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                        <img src="img/banner.png" class="image">
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                    <!-- <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div class="facebook text-center mr-3"><div class="fa fa-facebook"></div></div>
                        <div class="twitter text-center mr-3"><div class="fa fa-twitter"></div></div>
                        <div class="linkedin text-center mr-3"><div class="fa fa-linkedin"></div></div>
                    </div> -->
                    <!-- <div class="row px-3 mb-4">
                        <div class="line"></div>
                        <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div> -->
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Nama</h6></label>
                        <input class="form-control @error('name') is-invalid @enderror @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" type="name" name="name" placeholder="Masukan nama"  id="name">
                        @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Email</h6></label>
                        <input class="form-control @error('email') is-invalid @enderror @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" type="email" name="email" placeholder="Masukan email"  id="email">
                        @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Username</h6></label>
                        <input class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" type="username" name="username" placeholder="Masukan username"  id="username">
                        @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Password</h6></label>
                        <input  class="form-control @error('password') is-invalid @enderror" type="password" name="password" placeholder="Enter password">
                        @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Confirm password</h6></label>
                        <input id="password-confirm" class="form-control @error('password') is-invalid @enderror" type="password" name="password_confirmation" placeholder="Enter password">
                    </div>
                    <div class="row px-3 mb-4">
                        <!-- <div class="custom-control custom-checkbox custom-control-inline">
                            <input id="chk1" type="checkbox" name="chk" class="custom-control-input"> 
                            <label for="chk1" class="custom-control-label text-sm">Remember me</label>
                        </div> -->
                    </div>
                    <div class="row mb-3 px-3">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                    <div class="row mb-3 px-3">
                        <a class="btn btn-dark " href="/login">Halaman login</a>
                    </div>
                    <!-- <div class="row mb-4 px-3">
                        <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small>
                    </div> -->
                </div>
</form>
            </div>
        </div>
        <div class="bg-blue py-4">
            <div class="row px-3">
                <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2023. Muhammad Gusti Herjuno.</small>
                <div class="social-contact ml-4 ml-sm-auto">
                    <span class="fa fa-facebook mr-4 text-sm"></span>
                    <span class="fa fa-google-plus mr-4 text-sm"></span>
                    <span class="fa fa-linkedin mr-4 text-sm"></span>
                    <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                </div>
            </div>
        </div>
    </div>
</div>