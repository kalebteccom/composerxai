# How to rotate the signing key

You will end with a new signing key in production and the old one still accepted for 24 hours.

Before you start you need admin on the vault, and `keyctl` v3.2 or later. Check with `keyctl
version`. If you are on 3.1 the rotate subcommand exists but silently skips the overlap window,
which is the whole point of this procedure.

1. Generate the new key. Write down the fingerprint; you will need it in step 4.
2. Upload it as `signing-key-next`. Do not overwrite `signing-key`.
3. Deploy the verifier change that accepts both keys. Wait for all pods to report ready.
4. Promote `signing-key-next` to `signing-key`. Tokens signed with the old key still verify.
5. After 24 hours, delete the old key.

If step 3 fails, stop. Do not run step 4 with a partially rolled-out verifier or you will reject
every token signed by the new key on the pods that have not picked up the change yet.

You know it worked when `keyctl verify --both` returns two fingerprints and the auth error rate
is flat.
