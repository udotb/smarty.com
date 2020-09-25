<?php

namespace App\Http\Controllers\Users;
use App\Http\Controllers\Controller;
use App\Table_Mappers\Users\Users;
use Illuminate\Http\Request;

class User extends Controller
{
    public function save(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        return json_encode(['status' => $user->save()]);
    }
}
