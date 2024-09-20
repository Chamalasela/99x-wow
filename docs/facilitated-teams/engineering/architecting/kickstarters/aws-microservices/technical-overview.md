---
id: aws-microservice-technical-overview
title: Overview
---

# Technical Overview - AWS Microservice IaC Kickstarter

Followings are the quality attributes that we are designing this template for.

- Security

  - Only authenticated users can perform operations within the application
  - Setup firewall configurations (VNet / Application Gateway Firewall)
  - Generate audit logs for user actions
  - Apply data masking for user sensitive data in the database
  - Avoid exposing unnecessary resources (database, storage, etc) to public network

- Scalability

  - One million requests per minute
  - Scaling down when there are less requests
  - Use load balancers and horizontal scaling

- Reliability

  - Automatically recover from failure
  - Scale horizontally to increase aggregate workload availability

- Performance
  - Following performance metrics should be considered
    - Input/Ouput Operations per second
    - Caching to improve access performance
    - Autoscaling (Vertical and Horizontal)
  - Performance testing
    - Stress Testing
    - Load Testing
    - Failover Testing
    - Soak testing
  - Services such as Auto Scaling, Caching in AWS cloud can be used to improve performance
