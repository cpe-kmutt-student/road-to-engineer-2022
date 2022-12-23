export const Arrow = ({ direction }) => {
  const keyword =
    direction == "left"
      ? ["right-[50%]", " flex-row", "rounded-br-full"]
      : ["left-[50%]", " flex-row-reverse", "rounded-bl-full"];
  return (
    <div
      class={`absolute hidden md:flex items-center ${keyword[0] + keyword[1]} top-[50%]`}
    >
      {console.log(
        `absolute flex items-center ${keyword[0] + keyword[1]} top-[50%]`
      )}
      <div class="right-[50%]"></div>
      <div class="w-5 h-5 rounded-full border-2 border-bloodred-100" />
      <div
        class={`z-20 w-[5vw] ${keyword[2]} border-b-2 border-dashed border-bloodred-100  bg-transparent`}
      ></div>
    </div>
  );
};
