<?php

namespace App\Http\Controllers;

use App\Models\FoodItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\FoodItemResource;

class FoodItemController extends Controller
{
    public function index()
    {
        $foodItems = FoodItem::all();
        return FoodItemResource::collection($foodItems);
    }

    public function show($id)
    {
        $foodItem = FoodItem::findOrFail($id);
        return new FoodItemResource($foodItem);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'meal_id' => 'required|integer',
            'name' => 'required|string',
            'quantity' => 'required|numeric',
            'unit' => 'required|string',
            'calories_per_unit' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $foodItem = FoodItem::create($request->all());

        return new FoodItemResource($foodItem);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'meal_id' => 'required|integer',
            'name' => 'required|string',
            'quantity' => 'required|numeric',
            'unit' => 'required|string',
            'calories_per_unit' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $foodItem = FoodItem::findOrFail($id);
        $foodItem->update($request->all());

        return new FoodItemResource($foodItem);
    }

    public function destroy($id)
    {
        $foodItem = FoodItem::findOrFail($id);
        $foodItem->delete();

        return response()->json(['message' => 'Food item deleted'], 200);
    }
}
