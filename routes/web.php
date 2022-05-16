<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/vitrina-colombia', function () {
    return view('vitrinaColombia');
});

Route::get('/vitrina-colombia/{todo}', function () {
    return view('vitrinaColombia');
});

Route::get('/', [HomeController::class, 'index']);

Route::get('/blog/{slug}', [HomeController::class, 'index']);

Route::get('/{react}', [HomeController::class, 'index']);
