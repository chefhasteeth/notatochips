<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <Logo />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form v-model="form" class="space-y-6" action="/auth/sessions">
        <div>
          <Input v-model="form.email" name="email" type="text" label="Email address" />
        </div>

        <div>
          <Input v-model="form.password" name="password" type="password" label="Password" />
        </div>

        <div>
          <Button type="submit">
            Sign in
          </Button>
        </div>
      </Form>

      <p class="mt-10 text-center text-sm text-gray-400">
        Not a member?
        <Link href="/auth/registrations/new" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">Create an account.</Link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3'
import { Form, Input } from '@/components/forms'
import { Button, Logo } from '@/components'

const form = useForm({
  email: null,
  password: null,
})
</script>
