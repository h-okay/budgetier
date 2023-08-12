<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use Illuminate\Database\Seeder;



class DatabaseSeeder extends Seeder
{
    private static $DEFAULT_CATEGORIES = [
        'Home',
        'Daily Living',
        'Transportation',
        'Entertainment',
        'Health',
        'Vacation',
        'Personal',
        'Financial Obligations'
    ];

    private static $DEFAULT_SUBCATEGORIES = [
        'Rent' => 'Home',
        'Home Insurance' => 'Home',
        'Repairs' => 'Home',
        'Services' => 'Home',
        'Utilities' => 'Home',
        'Groceries' => 'Daily Living',
        'Dining Out' => 'Daily Living',
        'Alcohol' => 'Daily Living',
        'Cigarattes' => 'Daily Living',
        'Uber/Lyft' => 'Transportation',
        'Public Transportation' => 'Transportation',
        'Subscriptions' => 'Entertainment',
        'Concerts/Shows' => 'Entertainment',
        'Movies' => 'Entertainment',
        'Health Insurance' => 'Health',
        'Prescriptions' => 'Health',
        'Over the Counter Drugs' => 'Health',
        'Airfare' => 'Vacation',
        'Accomodations' => 'Vacation',
        'Food' => 'Vacation',
        'Souvenirs' => 'Vacation',
        'Rentals' => 'Vacation',
        'Activities' => 'Vacation',
        'Clothing' => 'Personal',
        'Books' => 'Personal',
        'Home' => 'Personal',
        'Tech' => 'Personal',
        'Education' => 'Personal',
        'Gifts' => 'Personal',
        'Credit Card' => 'Financial Obligations',
        'Student Loans' => 'Financial Obligations',
        'Mortgage' => 'Financial Obligations',
        'Car Loan' => 'Financial Obligations',
    ];

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        foreach ($this::$DEFAULT_CATEGORIES as $category) {
            Category::create([
                'name' => $category
            ]);
        }

        // foreach ($this::$DEFAULT_SUBCATEGORIES as $subcategory) {
        //     SubCategory::create([
        //         'name' => $subcategory
        //     ]);
        // }
    }
}
