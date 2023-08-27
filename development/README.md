<br>

## Notes

<br>

### Sphinx

The compilation code is

```shell
  sphinx-build -b html docs/source/ docs/build/html
```

There are a few Sphinx [themes](https://sphinx-themes.org) types.  The `stanford` theme:

* A [demo](https://sphinx-themes.org/sample-sites/sphinx-theme/) of the ``stanford`` theme.
* Installing [`sphinx-theme`](https://sphinx-themes.org/sample-sites/sphinx-theme/#quickstart), the underlying library.
    * [`pip install sphinx-theme`](https://pypi.org/project/sphinx-theme/)

There are [settings for different languages](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-language).  Perhaps one of its most important aspects of Sphinx is
[reStructuredText (reST)](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html), i.e.,  the plaintext markup language used by Sphinx.  References of import

* [installing `sphinx`](https://www.sphinx-doc.org/en/master/usage/installation.html)
* [getting started](https://www.sphinx-doc.org/en/master/tutorial/getting-started.html)
* [raw data pass through](https://docutils.sourceforge.io/docs/ref/rst/directives.html#raw-data-pass-through)
* [MathJax](https://docs.mathjax.org/en/latest/web/configuration.html#configuring-and-loading-in-one-script)
* [book theme](https://sphinx-book-theme.readthedocs.io/en/stable/customize/sidebar-secondary.html)
* [sphinx build](https://www.sphinx-doc.org/en/master/man/sphinx-build.html)
* [customising](https://docs.readthedocs.io/en/stable/guides/adding-custom-css.html#adding-custom-css-or-javascript-to-sphinx-documentation)

<br>
<br>

### Jekyll

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
<br>

<br>
<br>

<br>
<br>

<br>
<br>