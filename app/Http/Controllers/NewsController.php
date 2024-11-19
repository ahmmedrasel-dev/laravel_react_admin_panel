<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    //

    public function newsList(){
        return Inertia::render('News/NewsList');
    }

    public function newsAdd(){
        return Inertia::render('News/AddNews');
    }
}
