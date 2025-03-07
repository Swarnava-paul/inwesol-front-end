"use client";

import { HStack, Button, IconButton, Text } from "@chakra-ui/react";
import {
  Pagination as ChakraPagination,
  createContext,
  usePaginationContext,
} from "@chakra-ui/react";
import * as React from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiMiniEllipsisHorizontal,
} from "react-icons/hi2";
import { LinkButton } from "./link-button";

interface ButtonVariantContext {
  size: string;
  getHref?: (page: number) => string;
}

const [RootPropsProvider, useRootProps] = createContext<ButtonVariantContext>({
  name: "RootPropsProvider",
});

export interface PaginationRootProps extends Omit<ChakraPagination.RootProps, "type"> {
  size?: string;
  getHref?: (page: number) => string;
}

export const PaginationRoot = React.forwardRef<HTMLDivElement, PaginationRootProps>(
  function PaginationRoot(props, ref) {
    const { size = "sm", getHref, ...rest } = props;
    return (
      <RootPropsProvider value={{ size, getHref }}>
        <ChakraPagination.Root ref={ref} type={getHref ? "link" : "button"} {...rest} />
      </RootPropsProvider>
    );
  }
);


export const PaginationItem = React.forwardRef<HTMLButtonElement, ChakraPagination.ItemProps>(
  function PaginationItem(props, ref) {
    const { page } = usePaginationContext();
    const { size, getHref } = useRootProps();

    const isCurrent = page === props.value;

    if (getHref) {
      return (
        <LinkButton
          href={getHref(props.value)}
          size={size}
          bg={isCurrent ? "white" : "black"}
          color={isCurrent ? "black" : "white"}
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          {props.value}
        </LinkButton>
      );
    }

    return (
      <ChakraPagination.Item ref={ref} {...props} asChild>
        <Button
          size={size}
          bg={isCurrent ? "white" : "black"}
          color={isCurrent ? "black" : "white"}
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          {props.value}
        </Button>
      </ChakraPagination.Item>
    );
  }
);


export const PaginationEllipsis = React.forwardRef<HTMLDivElement, ChakraPagination.EllipsisProps>(
  function PaginationEllipsis(props, ref) {
    const { size } = useRootProps();
    return (
      <ChakraPagination.Ellipsis ref={ref} {...props} asChild>
        <Button as="span" size={size}
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          <HiMiniEllipsisHorizontal />
        </Button>
      </ChakraPagination.Ellipsis>
    );
  }
);

export const PaginationPrevTrigger = React.forwardRef<HTMLButtonElement, ChakraPagination.PrevTriggerProps>(
  function PaginationPrevTrigger(props, ref) {
    const { size, getHref } = useRootProps();
    const { previousPage } = usePaginationContext();

    if (getHref) {
      return (
        <LinkButton
          href={previousPage != null ? getHref(previousPage) : undefined}
          size={size}
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          <HiChevronLeft />
        </LinkButton>
      );
    }

    return (
      <ChakraPagination.PrevTrigger ref={ref} asChild {...props}>
        <IconButton
          size={size}
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          <HiChevronLeft />
        </IconButton>
      </ChakraPagination.PrevTrigger>
    );
  }
);


export const PaginationNextTrigger = React.forwardRef<HTMLButtonElement, ChakraPagination.NextTriggerProps>(
  function PaginationNextTrigger(props, ref) {
    const { size, getHref } = useRootProps();
    const { nextPage } = usePaginationContext();

    if (getHref) {
      return (
        <LinkButton
          href={nextPage != null ? getHref(nextPage) : undefined}
          size={size}
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          <HiChevronRight />
        </LinkButton>
      );
    }

    return (
      <ChakraPagination.NextTrigger ref={ref} asChild {...props}>
        <IconButton
          size={size}
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          _active={{ bg: "white", color: "black" }}
        >
          <HiChevronRight />
        </IconButton>
      </ChakraPagination.NextTrigger>
    );
  }
);


export const PaginationItems = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <ChakraPagination.Context>
      {({ pages }) =>
        pages.map((page, index) =>
          page.type === "ellipsis" ? (
            <PaginationEllipsis key={index} index={index} {...props} />
          ) : (
            <PaginationItem key={index} type="page" value={page.value} {...props} />
          )
        )
      }
    </ChakraPagination.Context>
  );
};


export const PaginationPageText = React.forwardRef<HTMLParagraphElement, { format?: "short" | "compact" | "long" }>(
  function PaginationPageText(props, ref) {
    const { format = "compact", ...rest } = props;
    const { page, totalPages, pageRange, count } = usePaginationContext();

    const content = React.useMemo(() => {
      if (format === "short") return `${page} / ${totalPages}`;
      if (format === "compact") return `${page} of ${totalPages}`;
      return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`;
    }, [format, page, totalPages, pageRange, count]);

    return <Text fontWeight="medium" ref={ref} {...rest}>{content}</Text>;
  }
);
