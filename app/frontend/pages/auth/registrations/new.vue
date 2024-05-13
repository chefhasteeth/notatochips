<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <Logo />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form v-model="form" class="space-y-6" action="/auth/registrations">
        <div>
          <Input v-model="form.email" name="email" type="text" label="Email address" />
        </div>

        <div>
          <Input v-model="form.password" name="password" type="password" label="Password" />
        </div>

        <div>
          <Input v-model="form.password_confirmation" name="password_confirmation" type="password" label="Confirm password" />
        </div>

        <div>
          <Button type="submit">
            Create account
          </Button>
        </div>
      </Form>
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
  password_confirmation: null,
})
</script>
