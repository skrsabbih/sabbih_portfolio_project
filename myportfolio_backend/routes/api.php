<?php

use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\FooterController;
use App\Http\Controllers\Api\HeroController;
use App\Http\Controllers\Api\ProjectController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::apiResource('heroes', HeroController::class);

Route::apiResource('abouts', AboutController::class);

Route::apiResource('projects', ProjectController::class);

Route::apiResource('contacts', ContactController::class);

Route::apiResource('footers', FooterController::class);