<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;

class Spending extends Model
{
    use HasFactory, Searchable;

    protected $fillable = [
        'spending_name',
        'spending_date',
        'spending_location',
        'spending_amount'
    ];

    protected $dates = [
        'spending_date'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
