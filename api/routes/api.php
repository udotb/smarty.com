<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::POST('contact-us', 'Contact\ContactController@save');
Route::GET('contact-us', 'Contact\ContactController@getContacts');
Route::DELETE('contact-us', 'Contact\ContactController@deleteContact');
Route::GET('contact-us/{contactId}/details', 'Contact\ContactController@getContactDetails');
