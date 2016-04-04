<% _.each(glyphs, function(glyph) { %>.<%= prefix %><%= glyph.name %>:before {
    content: "\<%= glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase() %>"
}
<% }); %>