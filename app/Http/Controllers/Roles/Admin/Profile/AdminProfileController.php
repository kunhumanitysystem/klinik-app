<?php

namespace App\Http\Controllers\Roles\Admin\Profile;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AdminProfileController extends Controller
{
    public function profile()
    {
        return Inertia::render('Profile/Admin');
    }
}
