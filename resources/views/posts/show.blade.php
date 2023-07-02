@extends('master.master')
   
@section('content')

<div class="container-fluid hero-header bg-light py-5 mb-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 mb-3 animated slideInDown">HALAMAN FORUM</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                       
                    </nav>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img   src="{{ asset('img/forumHalaman.png') }}"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->

    <!-- Header End -->

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center text-primary">FORUM</h3>
                    <br/>
                    <h2>{{ $post->title }}</h2>
                    <p>
                        {{ $post->body }}
                    </p>
                    <hr />
                    <!-- <h4>Display Comments</h4> -->
  
                    @include('posts.commentsDisplay', ['comments' => $post->comments, 'post_id' => $post->id])
   
                    <hr />
                    <h4>Tulis komentar</h4>
                    <form method="post" action="{{ route('comments.store'   ) }}">
                        @csrf
                        <div class="form-group">
                            <textarea class="form-control" name="body" placeholder="Tulis komentar"></textarea>
                            <input type="hidden" name="post_id" value="{{ $post->id }}" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btn btn-success" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection