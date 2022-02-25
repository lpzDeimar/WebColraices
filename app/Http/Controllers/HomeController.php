<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $ip = '194.154.1.96'; //Para hacer pruebas en local es necesario definir la IP manualmente.

        //$ip = $request->ip(); // Este es el codigo que se usa para obtener la IP del usuario de manera dinámica.

        $location = Location::get($ip);

        return view('home', compact('location'));
    }
}
