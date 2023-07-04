<?php

namespace App\Http\Controllers;

use App\Models\Spending;
use Inertia\Inertia;
use Illuminate\Http\Request;



class TextSearchController extends Controller
{

    public function index(Request $request)
    {
        $spendings = Spending::search($request->input('search_term'))->paginate(10);
        $spendings->load('user:id,name');
        $result = $spendings->toArray();
        return Inertia::render('Spendings/Index', ['spendings' => $result]);
    }
}
