# Client configuration

Every option below is set on the `Client` constructor. Options not listed are ignored.

## timeout

Seconds to wait for a response before raising `TimeoutError`. Default: `30`. Range: `1`-`3600`.
Ignored when `stream` is true.

## retries

Number of retry attempts after a failed request. Default: `3`. Range: `0`-`10`. Retries apply to
connection errors and to 5xx responses. Retries do not apply to 4xx responses.

## backoff

Seconds added between retry attempts. Default: `0.5`. Range: `0`-`60`. The delay before attempt
`n` is `backoff * (2 ** n)`. Ignored when `retries` is `0`.

## pool_size

Maximum number of open connections. Default: `10`. Range: `1`-`100`. Exceeding the pool blocks the
caller until a connection is released.

## verify_ssl

Whether to verify server certificates. Default: `true`. Setting this to `false` disables hostname
checking. Ignored on Windows when `ca_bundle` is set.

## user_agent

String sent in the `User-Agent` header. Default: `tinyclient/1.0`. Maximum length: 256 bytes.
