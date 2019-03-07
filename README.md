# WheatDirect

Redirect http traffic based on configurable rules.

## Usage

Update the rules in [config.yml](https://github.com/mikemonteith/wheatdirect/blob/master/config.yml).

Changes to the master branch will be deployed to https://nhsuk-survey.surge.sh

## Rules

### Percentage

Redirect traffic randomly, weighted by a `chance` value.

```yaml
- type: percentage
  values:
    - chance: 20
      url: https://example.com#20-percent-of-traffic
    - chance: 80
      url: https://example.com#80-percent-of-traffic
```

### Width

Redirect traffic based on device width.

Handles `mobile`, `tablet` and `desktop`.

```yaml
- type: width
  values:
    - device: mobile
      url: https://example.com#mobile-traffic
    - device: tablet
      url: https://example.com#tablet-traffic
    - device: desktop
      url: https://example.com#desktop-traffic
```

### Why "WheatDirect"?

This app was inspired by a request from [@ashleyjwheat](https://twitter.com/ashleyjwheat).
