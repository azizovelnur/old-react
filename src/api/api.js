import React from 'react';
import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": '2c9da347-5e93-4865-8ef6-d4204e7177f4'
  },
})

export const usersApi = {
  getUsers (currentPage = 1, pageSize = 5)  {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data
        })
    )
  }
}

