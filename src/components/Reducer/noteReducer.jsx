import React, { useState, useEffect } from "react";

export const noteReducer = (state, action) => {
// switch(action.type) {
    return [...state, {
        title: action.note.title,
        note: action.note.note,
    }]
}
}


