# ADR: Adopting A Microservices Architecture

## Context

In the current landscape of modern software engineering, monolithic architectures face significant
challenges related to scalability, maintainability, and team autonomy. Our platform has grown
considerably over the past several years, underscoring the need for a more flexible approach that
empowers individual teams to move independently.

## Considered Options

- **Monolith:** Continue with the existing approach, which is simple but increasingly limiting.
- **Modular monolith:** A middle ground that offers some benefits without full distribution.
- **Microservices:** A powerful, flexible, and industry-leading approach to service decomposition.

## Decision

We will adopt a microservices architecture. This decision represents a pivotal shift in our
architectural approach, underscoring our commitment to scalability and developer velocity.
Microservices serve as a foundational enabler for independent deployment, allowing teams to ship
without coordinating releases across the whole organisation.

## Consequences

- Good, because teams gain autonomy over their deployment cadence and technology choices.
- Good, because individual services can scale independently based on observed demand.
- Good, because failure isolation improves the overall resilience of the platform.
- Bad, because there is a slight learning curve associated with distributed systems.

## In Summary

Adopting microservices is a crucial step that plays a vital role in positioning our platform for
the future, enabling us to navigate the complexities of scale while maintaining velocity.
