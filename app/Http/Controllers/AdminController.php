<?php

namespace App\Http\Controllers;
use App\Admin;


use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function login(Request $request){

        if($request->isMethod('post')){
    		$data = $request->input();
            $adminCount = Admin::where(['email' => $data['email'],'password'=>md5($data['password']),'admin'=>1])->count(); 
            if($adminCount > 0){
                //echo "Success"; die;
                Session::put('adminSession', $data['username']);
                return redirect('/admin/dashboard');
        	}else{
                //echo "failed"; die;
                return redirect('/admin')->with('flash_message_error','Invalid Username or Password');
        	}
    	}
    	return view('admin.admin_login');
    }

    public function dashboard(){
        return view('admin.dashboard');
    }
}
