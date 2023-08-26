"""
conf.py

Configuration file for the Sphinx documentation builder.

For the full list of built-in configuration values, see the documentation:
https://www.sphinx-doc.org/en/master/usage/configuration.html
"""

import revitron_sphinx_theme


'''
-- Project information --
https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
'''
project = 'Third Reading'
author = 'greyhypotheses'
release = '0.01'


'''
-- General configuration ---------------------------------------------------
https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
'''
extensions = [
    'sphinx.ext.duration',
    'revitron_sphinx_theme'
]

templates_path = ['_templates']
exclude_patterns = []


'''
-- Options for HTML output -------------------------------------------------
https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
'''
html_theme = 'revitron_sphinx_theme'
html_static_path = ['_static']

html_theme_options = {
    'color_scheme': '',
    'canonical_url': '',
    'analytics_id': 'UA-XXXXXXX-1',
    'style_external_links': False,
    'collapse_navigation': True,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False,
    'github_url': '',
    'logo_mobile': 'demo/static/logo-mobile.svg'
}

html_logo = 'demo/static/logo.svg'

html_context = {
    'landing_page': {
        'menu': [
            {'title': 'Get Started', 'url': 'installing.html'},
            {'title': 'GitHub', 'url': 'https://github.com/user/repo'}
        ]
    }
}










