@foreach($comments as $comment)

@php

    $color= '';
    if ($comment->user->role == '0') {
        $color = 'superuser_color';
    }
    if ($comment->user->role == '1') {
        $color = 'user_color';
    }

@endphp

<div class="display-comment " @if($comment->parent_id != null) style="margin-left:40px;" @endif>
    <h5 class="{{$color}}">{{ $comment->user->name }}</h5>
    <p>{{ $comment->body }}</p>
    <a href="" id="reply"></a>
    <form method="post" action="{{ route('comments.store') }}">
        @csrf
        <div class="form-group">
            <input type="text" name="body" class="form-control" placeholder="Tulis komentar"/>
            <input type="hidden" name="post_id" value="{{ $post_id }}" />
            <input type="hidden" name="parent_id" value="{{ $comment->id }}" />
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Reply" />
        </div>
    </form>
    @include('posts.commentsDisplay', ['comments' => $comment->replies])
</div>
@endforeach