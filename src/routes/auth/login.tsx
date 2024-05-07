import { createForm } from "@tanstack/solid-form";
import { Spinner, SpinnerType } from "solid-spinner";

import { FieldInfo } from "~/components/field-info";
import { Button } from "~/components/ui/button";
import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
} from "~/components/ui/textfield";
import { Layout } from "~/layouts/layout";

export default function Login() {
  const form = createForm(() => ({
    defaultValues: {
      password: "",
      username: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  }));

  return (
    <Layout title="Login">
      <main class="container py-4">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <form.Field name="username">
              {(field) => (
                <>
                  <TextFieldRoot
                    onChange={(value) => field().handleChange(value)}
                    value={field().state.value}
                  >
                    <TextFieldLabel>Username</TextFieldLabel>
                    <TextField
                      id={field().name}
                      name={field().name}
                      onBlur={field().handleBlur}
                    />
                  </TextFieldRoot>
                  <FieldInfo field={field()} />
                </>
              )}
            </form.Field>
            <form.Field name="password">
              {(field) => (
                <>
                  <TextFieldRoot
                    onChange={(value) => field().handleChange(value)}
                    value={field().state.value}
                  >
                    <TextFieldLabel>Password</TextFieldLabel>
                    <TextField
                      id={field().name}
                      name={field().name}
                      onBlur={field().handleBlur}
                      type="password"
                    />
                  </TextFieldRoot>
                  <FieldInfo field={field()} />
                </>
              )}
            </form.Field>
            <div>
              <Button type="reset" variant="ghost">
                Reset
              </Button>
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
              >
                {(states) => (
                  <Button disabled={states()[0]}>
                    {states()[1] ? (
                      <Spinner type={SpinnerType.puff} />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                )}
              </form.Subscribe>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}
