# Cache outage, 14 August

The cache fell over at 04:12. It came back at 09:40.

What happened: we shipped a config change on the 13th that raised the TTL on session keys from
300 seconds to 86400. Nobody noticed because the change was three lines in a YAML file and the
review was mine. Memory use climbed all night. At 04:12 Redis hit maxmemory and started evicting
under `allkeys-lru`, which meant it evicted session keys, which meant everyone got logged out.

I was paged at 04:19. I spent forty minutes looking at the wrong thing—the API error rate—before
someone in the channel asked why memory had doubled. Rolling the TTL back fixed it in about four
minutes. The rest of the time was me.

Two things to change. First, TTL changes need a second reviewer; three lines is not a small change
if the three lines are a TTL. Second, we should alert on memory growth rate, not just on the
absolute number, because the absolute number was fine until it wasn't.

I don't think we need to move off `allkeys-lru`. The eviction policy did what it says. We told it
to hold a day of sessions in a box sized for five minutes of them.

Cost: about six hours of degraded login, no data loss, one very tired weekend.
