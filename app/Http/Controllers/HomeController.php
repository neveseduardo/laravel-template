<?php

namespace App\Http\Controllers;

use \App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
        // return view('app');
    }
}