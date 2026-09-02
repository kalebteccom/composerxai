# tinyq

A job queue for Postgres. No Redis, no broker, one table.

Use it when you already have Postgres, your throughput is under a few thousand jobs a minute, and
you would rather not run another service. Do not use it if you need fan-out, priorities beyond an
integer, or delivery guarantees stronger than at-least-once. If you need those, use River or
Oban; they are better at this than tinyq is and I would rather you were happy.

## Install

Add the package, then run the migration. The migration creates one table and two indexes.

## Status

Alpha as of August 2026. The `claim()` signature will change before 1.0. I want to pass a
deadline rather than a timeout, and I have not decided how. Pin the minor version.

## What it does badly

Long-running jobs. The lock is held by an advisory lock tied to the connection, so if your worker
blocks for ten minutes on a slow HTTP call, you are holding a connection for ten minutes. I have
a plan for this and no code.
