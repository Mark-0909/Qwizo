'use client'

import { signup } from '@/app/api/register/route'
import { useActionState } from 'react'
import { useState } from 'react'

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
  const [userType, setUserType] = useState('student') // Default to student

  return (
    <form
      action={(formData) => {
        formData.append('userType', userType); // Ensure userType is included in submission
        action(formData);
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p>User Type:</p>
        <label>
          <input
            type="radio"
            name="userType"
            value="student"
            checked={userType === 'student'}
            onChange={() => setUserType('student')}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="professor"
            checked={userType === 'professor'}
            onChange={() => setUserType('professor')}
          />
          Professor
        </label>
      </div>

      <button disabled={pending} type="submit">
        Sign Up
      </button>
    </form>
  )
}
