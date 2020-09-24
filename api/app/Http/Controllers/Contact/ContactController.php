<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Table_Mappers\Contact\ContactUs;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function save(Request $request)
    {
        $contact = new ContactUs();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->message = $request->message;
        return json_encode(['status' => $contact->save()]);
    }
}
