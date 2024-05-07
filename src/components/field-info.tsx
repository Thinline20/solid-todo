import { FieldApi } from "@tanstack/solid-form";

export function FieldInfo(props: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {props.field.state.meta.touchedErrors ? (
        <em>{props.field.state.meta.touchedErrors}</em>
      ) : null}
      {props.field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}
