<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/vitrinacolombia', function () {
    return view('VitrinaColombia');
});

Route::get('/', [HomeController::class, 'index']);

Route::get('/blog/{slug}', [HomeController::class, 'index']);

Route::get('/{react}', [HomeController::class, 'index']);
