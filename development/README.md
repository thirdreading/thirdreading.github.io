<br>

# Notes

<br>

## Jekyll

It might be possible to adjust/reset default colour & font declarations via a `.scss` within the `_sass` directory.  For example, let

```shell
// Text
$body-font-family: "Fira Mono";
$mono-font-family: "Fira Mono";
$body-text-color: #46433A;

// Head
$header-height: 4.25rem;

// Hyperlink
$link-color: #7253ed;

// Border
$border: 0px;
$border-radius: 8px;

// Side
$sidebar-color: #ffffff;
$content-width: 40rem;
```

be a set of preferred settings recorded in `supplementary.scss`.  These new settings are activated by adding

```yaml
# Custom Settings
color_scheme: supplementary
```

to the Jekyll project's `_config.yml`.

<br>

Within `_config.yml` use the `remote_theme` property to refer to a theme of interest, e.g., 

```yaml
remote_theme: just-the-docs/just-the-docs
```

<br>
<br>

<br>
<br>

<br>
<br>

<br>
<br>