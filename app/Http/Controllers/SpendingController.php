<?php

namespace App\Http\Controllers;

use App\Models\Spending;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;


class SpendingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $spendings = Spending::with('user:id,name')->latest()->paginate(10);
        return Inertia::render('Spendings/Index', ['spendings' => $spendings]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'spending_name' => 'required|string|max:255',
            'spending_date' => 'required|date',
            'spending_location' => 'required|string|max:255',
            'spending_amount' => 'required|numeric'
        ]);

        $request->user()->spendings()->create($validated);
        return redirect(route('spendings.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Spending $spending)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Spending $spending)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Spending $spending)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Spending $spending)
    {
        //
    }
}
