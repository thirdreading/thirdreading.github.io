"""
conf.py

Configuration file for the Sphinx documentation builder.

For the full list of built-in configuration values, see the documentation:
https://www.sphinx-doc.org/en/master/usage/configuration.html

Project information
https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
"""

import revitron_sphinx_theme

'''
Basic
'''
project = 'Third Reading'
copyright = '2023, greyhypotheses'
author = 'greyhypotheses'
release = '0.1'


'''
General configuration
https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
'''

extensions = [
    'sphinx.ext.duration',
    'revitron_sphinx_theme'
]
templates_path = ['_templates']
exclude_patterns = []


'''
Options for HTML output
https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
'''

html_theme = 'revitron_sphinx_theme'
html_static_path = ['_static']


html_theme_options = {
    'color_scheme': '',
    'canonical_url': '',
    'analytics_id': '',
    'style_external_links': False,
    'collapse_navigation': True,
    'sticky_navigation': True,
    'navigation_depth': 4,
    'includehidden': True,
    'titles_only': False,
    'github_url': 'https://www.github.com/greyhypotheses',
    'logo_mobile': '../../images/logo.svg'
}

html_logo = '../../images/logo.svg'

html_context = {
    'landing_page': {
        'menu': [
            {'title': 'Get Started', 'url': 'https://thirdreading.github.io'},
            {'title': 'GitHub', 'url': 'https://www.github.com/greyhypotheses'}
        ]
    }
}
