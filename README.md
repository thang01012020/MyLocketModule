# My Custom Test Module

This is a safe Surge module template for testing only with a development API and application that you own or are authorized to test.

## What it does

1. On `GET https://api.example.test/v1/remote-config`, it changes three feature flags in a JSON response.
2. Before requests to `/v1/receipts` and `/v1/subscribers`, it removes cache validators such as `If-None-Match`.
3. On responses from those two development endpoints, it adds a `module_test` entitlement object.

## Set it up

1. Copy this folder to the Surge profile directory.
2. Replace every `api.example.test` in `my-custom-test.sgmodule` with the hostname of your own development server.
3. Adapt the JSON property names in `scripts/remote-config.js` and `scripts/test-entitlement.js` to your server's documented response schema.
4. In Surge, install the module from the local `.sgmodule` file, generate/install the Surge CA certificate, and enable MITM only for that development hostname.
5. Confirm in Surge's request log that only your intended URLs match the rules.

## Safety notes

- Never add a third-party production subscription or payment hostname.
- Keep URL regular expressions narrowly scoped to test paths.
- Do not use `max-size=-1`; response buffering consumes memory on iOS.
- The module intentionally leaves unexpected or non-JSON responses unchanged.
