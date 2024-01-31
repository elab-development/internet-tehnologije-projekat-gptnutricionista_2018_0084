<?php

use App\Http\Controllers\DietPlanController;
use App\Http\Controllers\FoodItemController;
use App\Http\Controllers\MealController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('foodItems', FoodItemController::class);
Route::resource('dietPlans', DietPlanController::class);



Route::resource('meals', MealController::class)->except([
    'create', 'edit'
]);