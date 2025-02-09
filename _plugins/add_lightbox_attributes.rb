module Jekyll
  class AddLightboxAttributes < Jekyll::Generator
    safe true

    def generate(site)
      site.pages.each do |page|
        if page.extname == '.md'
          content = page.content

          # 画像のリンクにdata-lightbox属性を追加
          content.gsub!(/!\[([^\]]*)\]\(([^" ]+)(?:\s+"([^"]*)")?\)(?:\{\:\.([^\}]+)\})?/) do |match|
            alt_text = $1
            img_url = $2
            extra_params = $3 || ""
            img_classes = $4 || ""

            # max-widthの値を取得
            max_width = extra_params.match(/max-width\s*=\s*(\d+px)/)&.captures&.first

            # style属性を生成
            style = max_width ? "style=\"max-width: #{max_width};\"" : ""

            # 生成されるHTML
            <<~HTML.strip
              <a class="lightbox-image" href="#{img_url}" data-lightbox="gallery" data-title="#{alt_text}">
                <img src="#{img_url}" alt="#{alt_text}" #{style} class="#{img_classes}">
              </a>
            HTML
          end

          page.content = content
        end
      end
    end
  end
end
